import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/settings(.*)","/"])

// all prtected routes
//const isProtectedRoute = createRouteMatcher(["/","/settings(.*)","/testprtct(.*)"])

// export default clerkMiddleware();

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};