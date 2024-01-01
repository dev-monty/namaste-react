import { render,screen } from "@testing-library/react";
import Header from "../Header"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

test("should load contact us component",()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
     <Header />
    </Provider>
    </BrowserRouter>
    )

    const button = screen.getByText("Login");
    
    expect(button).toBeInTheDocument();

})