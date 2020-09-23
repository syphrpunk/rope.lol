import React, { useCallback } from 'react'
import { useWallet } from 'use-wallet'
// import useTokenBalance from '../../../hooks/useTokenBalance'
// import useRope from '../../../hooks/useRope'
// import { getSushiAddress } from '../../../sushi/utils'
// import { getBalanceNumber } from '../../../utils/formatBalance'
import Button from '../../Button'
// import CardIcon from '../../CardIcon'
// import Label from '../../Label'
import Modal from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'
import {ModalProps} from "../../Modal/Modal";
// import Value from '../../Value'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  // const rope = useRope()
  // const sushiBalance = useTokenBalance(getSushiAddress(sushi))

  return (
    <Modal>
      <ModalTitle text="My Account" />
      <ModalContent>
        {/*<Spacer />*/}

        {/*<div style={{ display: 'flex' }}>*/}
        {/*  <StyledBalanceWrapper>*/}
        {/*    <CardIcon>*/}
        {/*      <span>🍣</span>*/}
        {/*    </CardIcon>*/}
        {/*    <StyledBalance>*/}
        {/*      <Value value={getBalanceNumber(sushiBalance)} />*/}
        {/*      <Label text="SUSHI Balance" />*/}
        {/*    </StyledBalance>*/}
        {/*  </StyledBalanceWrapper>*/}
        {/*</div>*/}

        <Spacer />
        <Button
          href={`https://etherscan.io/address/${account}`}
          text="View on Etherscan"
          variant="secondary"
        />
        <Spacer />
        <Button
          onClick={handleSignOutClick}
          text="Sign out"
          variant="secondary"
        />
      </ModalContent>
      <ModalActions>
        <Button onClick={onDismiss} text="Cancel" />
      </ModalActions>
    </Modal>
  )
}

// const StyledBalance = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// `
//
// const StyledBalanceWrapper = styled.div`
//   align-items: center;
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   margin-bottom: ${(props) => props.theme.spacing[4]}px;
// `

export default AccountModal
