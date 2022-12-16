import PageContent from "./PageContent";
import TitleBar from "./TitleBar";

function ContentArea() {
    return (
      <div className="content-container">
        <TitleBar />
        <PageContent />
        {/* <BottomBar /> */}
      </div>
    );
  }
  
  export default ContentArea;