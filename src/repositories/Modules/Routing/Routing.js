import axios from 'axios';
import store from '../../../store';

class Routing{

    constructor(){
        this.basePath = store.state.backend;
    }

    solveNearestNeighbours(NodesDTO){
        return axios.post(`${this.basePath}/routingModule/solveNearestNeighbours`,NodesDTO);
    }

    solveClarkAndWright(NodesDTO){
        return axios.post(`${this.basePath}/routingModule/solveClarkAndWright`,NodesDTO);
    }

    solveSweep(NodesDTO){
        return axios.post(`${this.basePath}/routingModule/solveSweep`,NodesDTO);
    }
}

export default new Routing();