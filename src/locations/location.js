var project="http://139.9.169.87:8081/examsystem/"

const location={
    //专业操作

    //查询功能--分页
    professionalForPage : project+'professionalForPage',
    //查询功能--不分页
    getProfessionalNoPage :project +'getProfessionalNoPage',
    //新增功能
    addProfessional :project+'addProfessional',
    //修改功能
    updateProfessional :project +'updateProfessional',
    //删除功能
    deleteProfessional :project +'deleteProfessional',
    
    //科目操作

    //查询科目
    courseForPage :project +'courseForPage',
    //新增科目
    addCourse   : project +'addCourse',
    //修改功能
    updateCourse : project +'updateCourse',
    //删除功能
    deleteCourse : project +'deleteCourse'
    
}

export default location