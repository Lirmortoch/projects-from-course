import { EXAMPLES } from "../data-with-examples";
import Section from "./Section";
import { useState } from "react";
import Tabs from "./Tabs";
import TabButton from "./TabButton";

export default function Examples() {
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
        <Section title='Examples' id='examples'>
          <Tabs buttons={
            <>
                <TabButton onClick={() => handleSelect('components')} isSelected={selectedTopic === 'components'} >Components</TabButton>
                <TabButton onClick={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'} >JSX</TabButton>
                <TabButton onClick={() => handleSelect('props')} isSelected={selectedTopic === 'props'} >Props</TabButton>
                <TabButton onClick={() => handleSelect('state')} isSelected={selectedTopic === 'state'} >State</TabButton>
            </>
          }>
            {tabContent}
          </Tabs>
          <menu>
            
          </menu>
        </Section>
    );
}