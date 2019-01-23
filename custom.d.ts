declare module "webworker/*" {
    class WebpackWorker extends Worker {
      constructor();
    }
  
    export default WebpackWorker;
  }