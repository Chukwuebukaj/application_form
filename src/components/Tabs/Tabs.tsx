import { Pointer, TabWrapper, TabsWrapper } from "./Tabs.styled";
import { tabTitles } from "./TabsData";

interface TabProps {
  currentTab: string;
  onClick: (title: string) => void;
}

const Tabs: React.FC<TabProps> = ({ currentTab, onClick }) => {
  const currentIndex = tabTitles.indexOf(currentTab);

  return (
    <TabsWrapper>
      {tabTitles.map((title, index) => (
        <TabWrapper
          key={index}
          onClick={() => onClick(title)}
          className={title === currentTab ? "active" : ""}
        >
          {title === currentTab && <Pointer />}
          <span
            className={
              title === currentTab && index === 3
                ? "active white-text"
                : index === currentIndex - 1 || index === 3
                ? "active"
                : title === currentTab
                ? "active white-text"
                : ""
            }
          >
            {title}
          </span>
        </TabWrapper>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
