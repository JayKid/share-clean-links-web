const URL_INPUT_ID = "url-input";

document.addEventListener("DOMContentLoaded", () => {

    const submitHandler = async (event) => {
        event.preventDefault();
        const elements = event.target.elements;
        const urlFromUser = elements[URL_INPUT_ID].value;

        url = new URL(urlFromUser);
        const strippedURL = url.href.replace(url.search, '')

        const shareData = {
            url: strippedURL,
        }

        try {
            await navigator.share(shareData);
        }
        catch (error) {
            console.log("An error occurred while sharing", error);
        }
    }

    document.getElementById("url-form").addEventListener("submit", submitHandler);
});