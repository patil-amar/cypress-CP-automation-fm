import React from "react";
import styled from "styled-components";
import { AppNav } from "..";
import { STORAGE, THEME } from "../../constants";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Page, PageHeader, PageContent } from "../components/Page";
import { Spinner } from "../components/Spinner";
import { useCountries } from "../Countries";
import { useStorage } from "../Countries/useStorage";

function Home() {
  const [visited, setVisited] = useStorage(STORAGE.visited.id);
  const [wanted, setWanted] = useStorage(STORAGE.wanted.id);

  const { countries, loading } = useCountries();

  return (
    <Page>
      <PageHeader>
        <AppNav />
      </PageHeader>

      <PageContent>
        <h3>Dashboard</h3>

        <Panels>
          <Panel data-testid="countries-available" id="countries-available">
            <PanelContent vertical>
              <Count data-testid="countries-available-count" justify="center" margin={[40]}>
                {loading ? <Spinner /> : countries.length}
              </Count>
              <Box justify="center" margin={[0, 0, 20, 0]}>
                Countries available
              </Box>
            </PanelContent>
          </Panel>
          <Panel data-testid="countries-visited" id="countries-visited">
            <PanelContent vertical>
              <Count data-testid="countries-visited-count" justify="center" margin={[40]}>
                {visited.length}
              </Count>
              <Box justify="center" margin={[0, 0, 20, 0]}>
                Countries visited
              </Box>
              {Boolean(visited.length) && (
                <Button onClick={() => setVisited([])}>Reset</Button>
              )}
            </PanelContent>
          </Panel>
          <Panel data-testid="countries-wanted" id="countries-wanted">
            <PanelContent vertical>
              <Count data-testid="countries-wanted-count" justify="center" margin={[40]}>
                {wanted.length}
              </Count>
              <Box justify="center" margin={[0, 0, 20, 0]}>
                Countries to visit
              </Box>
              {Boolean(wanted.length) && (
                <Button onClick={() => setWanted([])}>Reset</Button>
              )}
            </PanelContent>
          </Panel>
        </Panels>
      </PageContent>
    </Page>
  );
}

const Panels = styled(Box)``;

const Panel = styled(Box).attrs(() => ({
  padding: [20],
  margin: [0, 10, 10, 0],
  vertical: true,
}))`
  background: ${THEME.colors.fg[1]};
  width: 320px;
`;

const PanelContent = styled(Box)``;

const Count = styled(Box)`
  font-size: 60px;
`;

export { Home };
