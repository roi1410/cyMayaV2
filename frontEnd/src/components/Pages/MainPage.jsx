import React, { useContext } from 'react'
import { allContext } from '../../MainContext'
import CourseForm from '../AllForms/CourseForm'
import FormsPage from './FormsPage'

function MainPage() {
  return (
    <>
    <div className='bg-popUp'>MainPage</div>
    <FormsPage/>
    </>
  )
}

export default MainPage