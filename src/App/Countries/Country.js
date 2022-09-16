import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { FaCheck, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AppNav } from "..";
import { STORAGE } from "../../constants";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Page, PageHeader, PageContent } from "../components/Page";
import { useStorage } from "./useStorage";

function Country() {
  const { code } = useParams();
  const { country } = useCountry({ code: code.toUpperCase() });

  const [visited, setVisited] = useStorage(STORAGE.visited.id);
  const [wanted, setWanted] = useStorage(STORAGE.wanted.id);

  const isVisited = visited.includes(country.code);
  const isWanted = wanted.includes(country.code);

  return (
    <Page>
      <PageHeader>
        <AppNav />
      </PageHeader>

      <PageContent>
        <Box vertical>
          <h1>
            {country.emoji} {country.name}
          </h1>

          <Box margin={[0, 0, 20, 0]}>
            <Box to="/countries" as={Link} align="center">
              <Box as={FaArrowLeft} margin={[0, 5, 0]} /> Go back to countries
            </Box>
          </Box>
        </Box>

        {country && (
          <Box horziontal>
            <CountryInfo  vertical>
              <CountryMeta title="Name">{country.name}</CountryMeta>
              <CountryMeta title="Code">{country.code}</CountryMeta>
              <CountryMeta title="Capital">{country.capital}</CountryMeta>
              <CountryMeta title="Continent">
                {country.continent?.name}
              </CountryMeta>
              <CountryMeta title="Currency">{country.currency}`</CountryMeta>
              {Boolean(country?.languages?.length) && (
                <CountryMeta data-testid ="country-language" title="Language">
                  {country.languages[0].name}
                </CountryMeta>
              )}

              <Box margin={[10, 0]}>
                <VisitedButton
                  isVisited={isVisited}
                  onClick={() => {
                    setVisited((visited) =>
                      isVisited
                        ? visited.filter((c) => c !== country.code)
                        : [...visited, country.code]
                    );
                  }}
                >
                  {isVisited ? (
                    <>
                      <FaCheck /> Visited
                    </>
                  ) : (
                    "Set as visited"
                  )}
                </VisitedButton>
                <WantedButton
                  isWanted={isWanted}
                  onClick={() => {
                    setWanted((wanted) =>
                      isWanted
                        ? wanted.filter((c) => c !== country.code)
                        : [...wanted, country.code]
                    );
                  }}
                >
                  {isWanted ? (
                    <>
                      <FaMapMarkerAlt /> Want to visit
                    </>
                  ) : (
                    "Set as want to visit"
                  )}
                </WantedButton>
              </Box>
            </CountryInfo>
            <MapWrapper padding={[0, 20]}>
              <iframe
                title="map"
                width="970"
                height="500"
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${country.name}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </MapWrapper>
          </Box>
        )}
      </PageContent>
    </Page>
  );
}

function CountryMeta({ title, children }) {
  return (
    <Box justify="space-between" margin={[0, 0, 10, 0]}>
      <Key>{title}</Key>
      <Box>{children}</Box>
    </Box>
  );
}

const Key = styled(Box)`
  font-weight: bold;
`;

const VisitedButton = styled(Button)`
  width: 100%;
  margin-right: 5px;

  background: ${(props) => props.isVisited && "green"};
`;

const WantedButton = styled(Button)`
  width: 100%;
  margin-left: 5px;

  background: ${(props) => props.isWanted && "dodgerblue"};
`;

const CountryInfo = styled(Box)`
  width: 30%;
`;

const MapWrapper = styled(Box)`
  width: 70%;
`;

function useCountry({ code }) {
  const response = useQuery(
    gql`
      query Country($code: ID!) {
        country(code: $code) {
          code
          name
          currency
          emoji
          capital
          continent {
            name
            code
          }
          languages {
            name
          }
        }
      }
    `,
    {
      variables: {
        code,
      },
    }
  );

  const country = response?.data?.country || [];

  return { ...response, country };
}

export { Country };
