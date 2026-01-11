import React from 'react'
import { ExpenseProvider } from '../context/ExpenseContext'
import DashboardLayout from '../layouts/DashboardLayout'

const Index = () => {
  return <ExpenseProvider>
         <DashboardLayout>
                  
         </DashboardLayout>
  </ExpenseProvider>
}

export default Index