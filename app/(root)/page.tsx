import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import { Section } from 'lucide-react'
import React from 'react'

const Home= () => {
const loggedIn ={firstName: 'Aditya', lastName:
   'krishna',email:'venkatakrishnaaditya2003@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName ||'Guest'}
          subtext="Acesses and manage your Account and transactions efficiently" 
          />

          <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 600.78}]}
      />
    </section>
  )
}

export default Home