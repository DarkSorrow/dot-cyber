import axios from 'axios';
import { CYBER } from './config';

const { CYBER_NODE_URL } = CYBER;

export const getProposals = () =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/gov/proposals`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );

export const getProposalsDetail = id =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/gov/proposals/${id}`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );

export const getStakingPool = () =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/staking/pool`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );

export const getTallying = () =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/gov/parameters/tallying`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );

export const getProposer = id =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/gov/proposals/${id}/proposer`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );

export const getProposalsDetailVotes = id =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/gov/proposals/${id}/votes`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );

export const getMinDeposit = () =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/gov/parameters/deposit`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );

export const getTableVoters = id =>
  new Promise(resolve =>
    axios({
      method: 'get',
      url: `${CYBER_NODE_URL}/lcd/gov/proposals/${id}/votes`,
    })
      .then(response => {
        resolve(response.data.result);
      })
      .catch(e => {})
  );
