import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ProjectPage from '../pages/ProjectPage.vue'
import ContactsPage from '../pages/ContactsPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contacts', name: 'contacts', component: ContactsPage },
        { path: '/project/:id', name: 'project-detail', component: ProjectPage },
        { path: '/not-found', name: 'not-found', component: NotFoundPage },
        { path: '/:pathMatch(.*)*', redirect: '/not-found' },
    ]
})

export { router }