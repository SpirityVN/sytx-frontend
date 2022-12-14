import { Box } from "@chakra-ui/react";
import React from "react";
import { Contract } from "../../pages";
import ContractItem, { NetWorkType } from "./card";

interface IProps {
  contracts: Contract[];
  setContractInfo: any;
  contractCurrent: Contract | undefined;
}

export const ListContracts = ({
  contracts,
  setContractInfo,
  contractCurrent,
}: IProps) => {
  return (
    <Box
      flex={1}
      h={"100%"}
      padding={"40px 35px 20px 35px"}
      display={"flex"}
      overflow={"auto"}
      flexDirection={"column"}
      gap={"20px"}
      className={"disable-scroll_bar"}
    >
      {contracts?.map((contract, index) => (
        <ContractItem
          setContractInfo={() => setContractInfo(contract)}
          key={contract.id}
          isActive={
            contractCurrent && contractCurrent.address === contract.address
          }
          networkType={contract.network_support.type as NetWorkType}
          contractName={contract.name}
          brandUrl={contract.network_support.icon_network_url}
          contractAddress={contract.address}
        />
      ))}
    </Box>
  );
};
