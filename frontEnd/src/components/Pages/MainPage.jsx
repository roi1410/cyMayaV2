import React, { useContext } from 'react'
import { allContext } from '../../MainContext'
import CourseForm from '../AllForms/CourseForm'
import FormsPage from './FormsPage'
import { Outlet } from 'react-router-dom'
import TablePage from './TablePage'
import UpperNavBar from '../UpperNavBar'
import SideNavBar from '../SideNavBar'
const columns = [
  {
    name: "name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "email",
    selector: (row) => row.email,
  },
  {
    name: "age",
    selector: (row) => row.age,
  },
  {
    name: "ID number",
    selector: (row) => row.IDnumber,
  },
  {
    name: "phoneNumber",
    selector: (row) => row.phoneNumber,
  },
  {
    name: "isShasan",
    selector: (row) => row.isShasan&&"inShsan",
  },
  {
    name: "coursePaymentImg",
    selector: (row) => row.coursePaymentImg,
  },
  {
    name: "barrowImgs",
    selector: (row) => row.barrowImgs,
  },
  {
    name: "gitHubAccount",
    selector: (row) => row.gitHubAccount,
  },
];
const data = [
  {
    id: 1,
    IDnumber:12124124124,
    name: "א",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf",
    coursePaymentImg:"asfsafasfsdfsdfsdfsdfsdfsdf"
  },
  {
    id: 2,
    IDnumber:12124124124,
    name: "ב",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:false,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf",
    coursePaymentImg:"asfsafasfsdfsdfsdfsdfsdfsdf"
  },
  {
    id: 3,
    IDnumber:12124124124,
    name: "ג",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf"
  },
  {
    id: 4,
    IDnumber:12124124124,
    name: "ד",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf"
  },
  {
    id: 5,
    IDnumber:12124124124,
    name: "ה",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf"
  },
  {
    id: 6,
    IDnumber:12124124124,
    name: "א",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf"
  },
  {
    id: 7,
    IDnumber:12124124124,
    name: "א",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf"
  },
  {
    id: 8,
    IDnumber:12124124124,
    name: "ב",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf"
  },
  {
    id: 9,
    IDnumber:12124124124,
    name: "ג",
    email: "roiqrq@gmail.com",
    age: "roiqrq@gmail.com",
    phoneNumber:233243242,
    isShasan:true,
    barrowImgs:"sdfsdfsdfsdfasfdasfdsdfsdfsfsdfsdfsdfsdfsdfdsfsdfdsfsdfdsfsdfsfdf",
    gitHubAccount:"sdfjksdfjksdjkfsdsdfnjsdfsdfjsdf"
  },
];



function MainPage() {
  return (
    <>
    <div className='h-screen w-screen bg-primary'>
      <UpperNavBar/>
      <SideNavBar />

    <Outlet/>
    </div>

    {/* <TablePage columns={columns} data={data} filterKey={"name"}/> */}
    </>
  )
}

export default MainPage