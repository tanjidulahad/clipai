import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'

const JsonViewer = ({jsonObject}) => {
    console.log(jsonObject)
    return (
        <JsonView src={JSON.parse(jsonObject)} theme="a11y"/>
    );
};

export default JsonViewer;