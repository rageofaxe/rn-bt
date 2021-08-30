import { createEvent, createStore } from "effector";

export const $route = createStore<Route>("play")
export const changeRoute = createEvent<Route>("change_route")

$route.on(changeRoute, (_, payload) => payload)