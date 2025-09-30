import { useState } from 'react';
import {CORE_CONCEPTS} from './data-with-examples'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data-with-examples.js'

function App() {
  const [selectedTopic, setSelectTopic] = useState();
  
  function handleSelect(selectedButton) {
    setSelectTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return ( 
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts!</h2>

          <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'} >Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'} >Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'} >State</TabButton>
          </menu>

          {tabContent}
          
        </section>
      </main>
    </div>
  );
}
 
export default App; 
