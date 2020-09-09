import app from "@/views/home_page.vue"
import shouye from "@/components/shouye.vue"
import czrz from "@/components/system/Operation_log.vue"
import role from '@/components/system/Role_management.vue'
import qxgl from '@/components/system/Authority_management.vue'
import qygl from '@/components/system/business_management.vue'
import gswh from '@/components/Basic_maintenance/Company_maintenance.vue'
import kswh from '@/components/Basic_maintenance/Department_maintenance.vue'
import zffs from '@/components/Basic_maintenance/Payment_method.vue'
import zgbm from '@/components/Basic_maintenance/competent_department.vue'
import xmfb from '@/components/Announcement/Project_release.vue'
import tzfb from '@/components/Announcement/Notice_release.vue'
import ckcl from '@/components/Announcement/Reference_materials.vue'
import zjl from '@/components/Project_filling/Capital.vue'
import ryl from '@/components/Project_filling/honor.vue'
import kjl from '@/components/Project_filling/science.vue'
import zjl1 from '@/components/Schedule_management/capital.vue'
import kjl1 from '@/components/Schedule_management/science.vue'
import zjl2 from '@/components/Acceptance_management/capital.vue'
import kjl2 from '@/components/Acceptance_management/science.vue'
import xmwj from '@/components/Project_archives/Project_documents.vue'
import sjbg from '@/components/Project_archives/audit_report.vue'
import xmzl from '@/components/Project_overview/Overview_items.vue'
import hsz from '@/components/recycle_bin/recycle_bin.vue'



export default{
    path:'/app',
    component:app,
    meta:{requireAuth:true},

        children:[
        {
        path:'/',
        component:shouye
        },
        {
            path:'/shouye',
            component:shouye
            },
        {
            path:'/czrz',
            component:czrz
        },
        {
            path:'/role',
            component:role
        },
        {
            path:'/qxgl',
            component:qxgl
        },
        {
            path:'/qygl',
            component:qygl
        },
        {
            path:'/gswh',
            component:gswh
        },
        {
            path:'/kswh',
            component:kswh
        },
        {
            path:'/zffs',
            component:zffs
        },
        {
            path:'/zgbm',
            component:zgbm
        },
        {
            path:'/xmfb',
            component:xmfb
        },
        {
            path:'/tzfb',
            component:tzfb
        },
        {
            path:'/ckcl',
            component:ckcl
        },
        {
            path:'/zjl',
            component:zjl
        },
        {
            path:'/ryl',
            component:ryl
        },
        {
            path:'/kjl',
            component:kjl
        },
        {
            path:'/zjl1',
            component:zjl1
        },
        {
            path:'/kjl1',
            component:kjl1
        },
        {
            path:'/zjl2',
            component:zjl2
        },
        {
            path:'/kjl2',
            component:kjl2
        },
        {
            path:'/xmwj',
            component:xmwj
        },
        {
            path:'/sjbg',
            component:sjbg
        },
        {
            path:'/xmzl',
            component:xmzl
        },
        {
            path:'/hsz',
            component:hsz
        }
]
}