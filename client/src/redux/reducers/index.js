import {facilities} from "./FacilityReducer";
import {stars} from "./StarReducer";
import {rooms} from "./RoomReducer";
import {budget} from "./BudgetReducer";
import {city} from './cityReducer';

import { combineReducers } from "redux";

export const allReducers = combineReducers({facilities,stars,rooms,budget,city});