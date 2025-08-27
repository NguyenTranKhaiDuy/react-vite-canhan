import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {

  //truyền prop từ cha sang con: {key: value}
  return (
    <>
      <Header />
      {/*render con được kế thừa vào vị trí nào từ cha (children - outlet)*/}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App