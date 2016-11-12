import ExampleApp from "./exampleApp/app";
import AuthApp from "./authApp/app";


const startNavigating = (newLocation) => {
    window.location.replace(
        window.location.pathname + window.location.search + "#" + newLocation
    );
};

const navigated = () => {
    var normalizedHash =  window.location.hash.replace(/^#\/?|\/$/g, '');
    switch (normalizedHash) {
        case "":
            startNavigating("/auth");
            break;
        case "example":
            ExampleApp.startApp();
            break;
        case "auth":
            AuthApp.startApp();
            break;
        default:
            console.warn("Route didn't matched any app !");
    }
}

export { startNavigating, navigated };
