import { gql, useQuery } from "@apollo/client";
import { EnumSourceControlService } from "../../models";

type Props = {
  appId: string;
  sourceControlService: EnumSourceControlService;
};

export default function useGitUserName({ appId, sourceControlService }: Props) {
  const { data } = useQuery(GET_USERNAME, {
    variables: { appId, sourceControlService },
  });
  return { username: data?.getUsername };
}

const GET_USERNAME = gql`
  query getUsername(
    $appId: String!
    $sourceControlService: EnumSourceControlService!
  ) {
    getUsername(appId: $appId, sourceControlService: $sourceControlService)
  }
`;
