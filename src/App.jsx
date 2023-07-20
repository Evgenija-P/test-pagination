import { observer } from "mobx-react-lite";
import "./index.css";
import ImageList from "./API/components/imageList";
import Paginated from "./API/components/paginate";

const App = observer(() => {
  return (
    <div className="max-w-[1440px] mx-auto px-24 py-10">
      <ImageList />
      <Paginated itemsPerPage={20} />
    </div>
  );
});

export default App;
