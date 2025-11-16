import type { TabType } from "./Accordion"

type TabProps = {
    isSelected: boolean,
    onSelect: () => void,
    children: React.ReactNode
}
type AccordionTabProps = {
    selectedType: string,
    onSelectType: (selectedType: TabType) => void,
    children: React.ReactNode
}

const Tab = ({ isSelected, onSelect, children }: TabProps) => {
  return (
    <li>
      <button
        className={`py-2.5 px-5 text-start cursor-pointer rounded-[30px] bg-neutral-color text-primary-text flex items-center hover:text-white hover:bg-primary-color ${isSelected ? 'text-white bg-primary-color' : ''} transition-all duration-300 ease-in-out`}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}

const AccordionTabs = ({ selectedType, onSelectType, children }: AccordionTabProps) => {
  return (
    <>
      <menu className='list-none flex mb-4 gap-4 justify-center mt-6 flex-wrap'>
        <Tab
          isSelected={selectedType === 'general'}
          onSelect={() => onSelectType('general')}
        >
          General
        </Tab>
        <Tab
          isSelected={selectedType === 'freelancing'}
          onSelect={() => onSelectType('freelancing')}
        >
          Freelancing
        </Tab>
        <Tab
          isSelected={selectedType === 'account'}
          onSelect={() => onSelectType('account')}
        >
          Account
        </Tab>
        <Tab
          isSelected={selectedType === 'transfer'}
          onSelect={() => onSelectType('transfer')}
        >
          Transfer
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}

export default AccordionTabs;