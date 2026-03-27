import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProductView from '@/views/ProductView.vue'
import AddProductView from '@/views/AddProductView.vue'
import EditProductView from '@/views/EditProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView
    },
    {
      path: "/products/:id",
      name: "product",
      component: ProductView
    },
    {
      path: "/products/add",
      name: "add-product",
      component: AddProductView
    },
    {
      path: "/products/edit/:id",
      name: "edit-product",
      component: EditProductView
    },
    {
      path: "/:catchAll(.*)*",
      name: "not-found",
      component: NotFoundView
    }
  ]
})

export default router