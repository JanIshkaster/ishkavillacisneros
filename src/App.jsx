import { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
window.$ = window.jQuery = $

import 'pagepiling.js/dist/jquery.pagepiling.css'
import './App.css'
import Header from './components/header'
import Section_one from './components/section_one'
import Section_two from './components/section_two'
import Section_three from './components/Section_three'
import Section_four from './components/Section_four'
import Section_five from './components/Section_five'
import Section_six from './components/Section_six' 

function App() {
  const initialized = useRef(false)

  const [activeSection, setActiveSection] = useState('page1')
  const lightSections = ['page2']

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const isMobile = window.innerWidth <= 768 

    import('pagepiling.js/dist/jquery.pagepiling.min.js').then(() => {
      $('#pagepiling').pagepiling({
        menu: null,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6' ],
        sectionsColor: ['#1f1f1f', '#fff'],
        scrollingSpeed: 700,
        css3: true,
        easingcss3: 'ease-in-out',  
        autoScrolling: !isMobile,
        navigation: {
          textColor: '#fff',
          bulletsColor: '#fff',
          position: 'right',
        },
        afterLoad: (anchorLink) => {
          setActiveSection(anchorLink) // ← fires every time a new section becomes active
        },
      })
    })

    return () => {
      if ($.fn.pagepiling && $('#pagepiling').data('pagepiling')) {
        $('#pagepiling').pagepiling.destroy('all')
      }
      initialized.current = false
    }
  }, [])

  return (
    <> 
      <Header isOnLightSection={lightSections.includes(activeSection)} />
      <div id="pagepiling">
        <Section_one />
        <Section_two isActive={activeSection === 'page2'}/>
        <Section_three isActive={activeSection === 'page3'}/>
        <Section_four isActive={activeSection === 'page4'}/>
        <Section_five isActive={activeSection === 'page5'}/>
        <Section_six isActive={activeSection === 'page6'}/>
      </div>
    </>
  )
}

export default App