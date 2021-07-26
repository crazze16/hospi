import styled from "styled-components/macro";

export const ContainerPD = styled.div`
  display: grid;
  #firstname {
    grid-area: firstname;
  }
  #lastname {
    grid-area: lastname;
  }
  &.student {
    grid-template-areas:
      "firstname firstname lastname lastname"
      "birthdate birthdate birthcountry birthcountry"
      "countrycode phone phone phone";
    grid-template-columns: 130px minmax(20px, 1fr) 1fr minmax(130px, 1fr);
    grid-template-rows: repeat(3, auto);

    #birthdate {
      grid-area: birthdate;
    }
    #birthcountry {
      grid-area: birthcountry;
    }
    #countrycode {
      grid-area: countrycode;
    }
    div:nth-of-type(6) {
      grid-area: phone;
    }
    gap: 24px;
    transition: 0.7s;
    @media ${(props) => props.theme.media.tablet} {
      grid-template-areas:
        "firstname firstname lastname lastname"
        "birthdate birthdate birthcountry birthcountry"
        "countrycode countrycode phone phone";
    }
    @media ${(props) => props.theme.media.phone} {
      grid-template-areas:
        "firstname"
        "lastname"
        "birthdate"
        "birthcountry"
        "countrycode"
        "phone";
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, auto);
    }
  }
  &.host {
    grid-template-areas:
      "firstname firstname lastname lastname"
      "countrycode phone phone phone";
    grid-template-columns: minmax(120px 1fr) repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    #countrycode {
      grid-area: countrycode;
    }
    #phone {
      grid-area: phone;
    }
    gap: 24px;
    transition: 0.7s;
    @media ${(props) => props.theme.media.tablet} {
      grid-template-areas:
        "firstname firstname lastname lastname"
        "countrycode countrycode phone phone";
    }
    @media ${(props) => props.theme.media.phone} {
      grid-template-areas:
        "firstname"
        "lastname"
        "countrycode"
        "phone";
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
    }
  }
  &.avatar {
    #photo {
      grid-area: photo;
    }
    #firstname {
      grid-area: firstname;
    }
    #lastname {
      grid-area: lastname;
    }
    &.student {
      grid-template-areas:
        "photo photo photo photo"
        "firstname firstname lastname lastname"
        "birthdate birthdate birthcountry birthcountry"
        "countrycode phone phone phone";
      grid-template-columns: minmax(120px 1fr) repeat(3, 1fr);
      grid-template-rows: repeat(4, auto);

      #birthdate {
        grid-area: birthdate;
      }
      #birthcountry {
        grid-area: birthcountry;
      }
      #countrycode {
        grid-area: countrycode;
      }
      #phone {
        grid-area: phone;
      }
      gap: 24px;
      transition: 0.7s;
      @media ${(props) => props.theme.media.tablet} {
        grid-template-areas:
          "photo photo photo photo"
          "firstname firstname lastname lastname"
          "birthdate birthdate birthcountry birthcountry"
          "countrycode countrycode phone phone";
      }
      @media ${(props) => props.theme.media.phone} {
        grid-template-areas:
          "photo"
          "firstname"
          "lastname"
          "birthdate"
          "birthcountry"
          "countrycode"
          "phone";
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, auto);
      }
    }
    &.host {
      grid-template-areas:
        "photo photo photo photo"
        "firstname firstname lastname lastname"
        "countrycode phone phone phone";
      grid-template-columns: minmax(120px 1fr) repeat(3, 1fr);
      grid-template-rows: repeat(3, auto);
      #countrycode {
        grid-area: countrycode;
      }
      #phone {
        grid-area: phone;
      }
      gap: 24px;
      transition: 0.7s;
      @media ${(props) => props.theme.media.tablet} {
        grid-template-areas:
          "photo photo photo photo"
          "firstname firstname lastname lastname"
          "countrycode countrycode phone phone";
      }
      @media ${(props) => props.theme.media.phone} {
        grid-template-areas:
          "photo"
          "firstname"
          "lastname"
          "countrycode"
          "phone";
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, auto);
      }
    }
  }
`;
