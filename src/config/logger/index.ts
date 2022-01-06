const options = {
    timestampFormat:'YYYYMMDD h:mm:ss a',
    color:'red'
}
const simpleNodeLogger = require('simple-node-logger');
const log = simpleNodeLogger.createSimpleLogger( options )

export default log