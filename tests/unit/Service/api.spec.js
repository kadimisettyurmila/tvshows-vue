import { getAllShows, searchShows, getShowDetails, getShowSeason, getShowCasts } from '@/Service/api'
import axios from 'axios'

jest.mock('axios');

describe('In TV Show Service', () => {
    it('Mocking getShowsByName method ', () => {
        const showMockData = ["Breaking Bad", "The Wire"];
        axios.get.mockResolvedValue(showMockData);
        getAllShows('Breaking').then(response => {
            expect(response).toEqual(showMockData);
        })
    })
    it('Mocking getShowsByName method ', () => {
        const showMockData = ["Breaking Bad", "The Wire"];
        axios.get.mockResolvedValue(showMockData);
        searchShows('Breaking').then(response => {
            expect(response).toEqual(showMockData);
        })
    })
    it('Mocking getShowsByName method ', () => {
        const showMockData = ["Season 1"];
        axios.get.mockResolvedValue(showMockData);
        getShowDetails('Season').then(response => {
            expect(response).toEqual(showMockData);
        })
    })
    it('Mocking getSeasons method ', () => {
        const showMockData = ["Breaking Bad", "The Wire"];
        axios.get.mockResolvedValue(showMockData);
        getShowSeason('Breaking').then(response => {
            expect(response).toEqual(showMockData);
        })
    })
    it('Mocking getShowsCasts method ', () => {
        const showMockData = ["Bryan Cranston", "RJ Mitte"];
        axios.get.mockResolvedValue(showMockData);
        getShowCasts('Bryan').then(response => {
            expect(response).toEqual(showMockData);
        })
    })

});
