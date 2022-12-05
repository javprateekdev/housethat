const { createSlice } = require('@reduxjs/toolkit');

const initialState = {u_id:null, name:null,label:null, ProjectPlotArea: null, GreenArea: null,PropertyStatus:null,PriceRange:null,TotalTowers: null,TotalFlats: null,OCStatus: null,
    Density: null,PodiumNonPodium: null,ApprovedBank: null,ClubHouseSize: null,
    ConstructionType: null,TowerHeights: null,LiftperTower: null,FloorvsFlats: null,PossessionDate:null,Lobby: null,Distance: null,Segment: null }

const property1Slice = createSlice({
    name: 'property2',
    initialState,
    reducers: {
        add2(state, action) {
            state.u_id = action.payload.u_id;
            state.name = action.payload.name;
            state.label = action.payload.label;
            state.ProjectPlotArea = action.payload.ProjectPlotArea;
            state.GreenArea = action.payload.GreenArea;
            state.PropertyStatus = action.payload.PropertyStatus;
            state.PriceRange = action.payload.PriceRange;
            state.TotalTowers = action.payload.TotalTowers;
            state.TotalFlats = action.payload.TotalFlats;
            state.OCStatus = action.payload.OCStatus;
            state.Density = action.payload.Density;
            state.PodiumNonPodium= action.payload.PodiumNonPodium;
            state.ApprovedBank = action.payload.ApprovedBank;
            state.ClubHouseSize = action.payload.ClubHouseSize;
            state.ConstructionType = action.payload.ConstructionType;
            state.TowerHeights = action.payload.TowerHeights;
            state.LiftperTower = action.payload.LiftperTower;
            state.FloorvsFlats = action.payload.FloorvsFlats;
            state.PossessionDate = action.payload.PossessionDate;
            state.Lobby = action.payload.Lobby;
            state.Distance = action.payload.Distance;
            state.Segment = action.payload.Segment;
        },
     
    },
});

export const { add2 } = property1Slice.actions;
export default property1Slice.reducer;