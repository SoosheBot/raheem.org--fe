import React from "react";
import { render } from "@testing-library/react";

//mock the Firestore database
const { FakeFirestore } = require("firestore-jest-mock");

import Story from "../../Dashboard/Story";

const mockReport = [{rating: 3}];

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useParams: () => ({
     report: mockReport
    })
  }));


describe("<Story />", () => {
    it("renders", () => {
        <Story />
    });
});