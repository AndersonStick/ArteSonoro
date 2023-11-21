import { connect } from 'react-redux';
import {list_orders} from '../../redux/actions/orders'
import { useParams } from 'react-router';
import {
    get_items,
    get_total,
    get_item_total
} from "../../redux/actions/cart";
import { get_order_detail } from '../../redux/actions/orders';
import { useEffect } from 'react';
import { Navigate } from 'react-router';
import DashboardLink from '../../components/dashboard/DashboardLink';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  MenuAlt2Icon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const userNavigation = [
  { name: 'Tu perfil', href: '#' },
  { name: 'Configuración', href: '#' },
  { name: 'Cerrar Sesión', href: '#' },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DashboardPaymentDetail =({
    list_orders,
    get_items,
    get_total,
    get_item_total,
    order,
    isAuthenticated,
    user,
    get_order_detail
})=>{

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const params = useParams()
    const transaction_id = params.transaction_id
    
    useEffect(() => {
        get_order_detail(transaction_id)
    }, [transaction_id])

    if(!isAuthenticated)
        return <Navigate to="/"/>

    // Asegurarse de que 'order' esté definido antes de acceder a sus propiedades
    if (!order) {
      return (
        <div>
          <p>Cargando...</p>
        </div>
      );
    }

    // Helper function to calculate the width of the progress bar based on order status
    const calculateProgressBarWidth = (status) => {
      switch (status) {
        case 'not_processed':
          return '25%'; // Adjust the width based on your preference
        case 'processed':
          return '50%';
        case 'shipped':
          return '75%';
        case 'delivered':
          return '100%';
        default:
          return '0%';
      }
    };

    // Helper function to conditionally apply styles to each step based on order status
    const getStepClassName = (step, orderStatus) => {
      const isCompleted = step <= getOrderStatusIndex(orderStatus);
      return classNames(isCompleted ? 'text-custom-blue' : '', `text-${getStepAlignment(step)}`);
    };

    // Helper function to get the alignment for each step
    const getStepAlignment = (step) => {
      switch (step) {
        case 0:
          return '';
        case 1:
          return 'center';
        case 2:
          return 'center';
        case 3:
          return 'right';
        default:
          return '';
      }
    };

    // Helper function to get the index of the order status for comparison
    const getOrderStatusIndex = (status) => {
      const statusOrder = ['Orden realizada', 'Procesando', 'Enviada', 'Entregada'];
      return statusOrder.indexOf(status);
    };

    return (
        <>
            <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                    <Link to="/">
                  <img
                    className="h-16 w-auto cursor-pointer"
                    src="https://scontent.fbog17-1.fna.fbcdn.net/v/t39.30808-6/299573120_390962279840498_6685377062908282532_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5-RHDmqXgzYAX-66Wx0&_nc_zt=23&_nc_ht=scontent.fbog17-1.fna&oh=00_AfCr-39leW6IynY5OmPsfdIk_z-7ijMiCehQE7gVRuF60g&oe=65611315"
                    alt="Logo Motospit"
                  />
                  </Link>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                  <DashboardLink/>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">

            <Link
                to="/"
                className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Regresar
            </Link>
            
              <img
                className="h-16 w-auto"
                src="https://scontent.fbog17-1.fna.fbcdn.net/v/t39.30808-6/299573120_390962279840498_6685377062908282532_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5-RHDmqXgzYAX-66Wx0&_nc_zt=23&_nc_ht=scontent.fbog17-1.fna&oh=00_AfCr-39leW6IynY5OmPsfdIk_z-7ijMiCehQE7gVRuF60g&oe=65611315"
                alt="Logo Motospit"
              />
              
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                <DashboardLink/>
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Buscar"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-3xl mx-auto">

            <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Detalle de la orden</h1>

        <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
          <dl className="flex">
            <dt className="text-gray-500">ID de transacción: &nbsp;</dt>
            <dd className="font-medium text-gray-900">{order.transaction_id}</dd>
            <dt>
              <span className="sr-only">Fecha</span>
              <span className="text-gray-400 mx-2" aria-hidden="true">
                &middot;
              </span>
            </dt>
            <dd className="font-medium text-gray-900">
              <time dateTime="2021-03-22">{order.date_issued}</time>
            </dd>
          </dl>
        </div>

        <div className="mt-8">
          <h2 className="sr-only">Productos comprados</h2>

          <div className="space-y-24">
            {order.order_items.map((product) => (
              <div
              key={product.id}
              className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
            >
              

              <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="font-medium text-gray-900 mt-1">ID de transacción: {order.transaction_id}</p>
                <p className="text-gray-500 mt-3">{product.description}</p>
              </div>
              <div className="sm:col-span-12 md:col-span-7">
                <dl className="grid grid-cols-1 gap-y-8 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                  <div>
                    <dt className="font-medium text-gray-900">Dirección de envio</dt>
                    <dd className="mt-3 text-gray-500">
                      <span className="block">{order.address_line_1}</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Envio</dt>
                    <dd className="mt-3 text-gray-500 space-y-3">
                      <p>$ {order.shipping_price}</p>
                      <p>$ {order.amount} Costo Total</p>
                      
                    </dd>
                  </div>
                </dl>
                <p className="font-medium text-gray-900 mt-6 md:mt-10">
                  Estado: {order.status}
                </p>
                <div className="mt-6">
                  <div className="bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-custom-blue rounded-full"
                      style={{ width: calculateProgressBarWidth(order.status) }}
                    />
                  </div>
                  <div className="hidden sm:grid grid-cols-4 font-medium text-gray-600 mt-6">
                    <div className={getStepClassName(0, order.status)}>Orden realizada</div>
                    <div className={getStepClassName(1, order.status)}>Procesando</div>
                    <div className={getStepClassName(2, order.status)}>Enviada</div>
                    <div className={getStepClassName(3, order.status)}>Entregada</div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

      </div>
    </div>

        <div className="mt-8">
           
          <div className="space-y-12">
            
          </div>
        </div>
      </div>
    </div>

            </div>
            </div>
            </div>
          </main>
        </div>
      </div>
        </>
    )


}

const mapStateToProps =state=>({
    order: state.Orders.order,
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
})

export default connect(mapStateToProps,{
    list_orders,
    get_items,
    get_total,
    get_item_total,
    get_order_detail
}) (DashboardPaymentDetail)