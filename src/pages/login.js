import LoginPage from "@/container/Login"

const propTypes = {
    Layout : null,
}

const defaultProps = {
    Layout : null
}

const Index = () =>  <LoginPage />

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

Index.getLayout = (page) => page 

export default Index;