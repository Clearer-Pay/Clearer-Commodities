export enum AppRoutes {
  home = "/",
  notFound = "/not-found",
  addMerchandice = "/addMerchandice",
  itemPage = "/item/:slug/:id",
  quoteRequest = "/quote/:item_id",
  moreDetailsRoutes = "/mr/:param",
  service = "/mr/:param/:service",
  ourServices = "/our-services/:service",
  contact = "contact",
  search = "search",
  signup = "signup",
}

export enum AppNavigationRoutes {
  home = "/",
  notFound = "/not-found",
  addMerchandice = "addMerchandice",
  itemPage = "item",
  quoteRequest = "quote",
  moreDetailsRoutes = "mr",
  ourServices = "our-services",
  contact = "/contact",
  search = "search",
  signup = "/signup",
}

export const authenticatedRoutes = [];
