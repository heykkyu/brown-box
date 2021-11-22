import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '@src/state';

const ParcelListWrap = styled.div`

`

const ParcelList = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)

  return (
    <>
      <ParcelListWrap>
        추가
        <h1>{amount}</h1>
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(500)}>Withdarw</button>
          <button onClick={() => bankrupt()}>Bankrupt</button>
      </ParcelListWrap>
    </>
  );
}

export default ParcelList;
 