
function join(...paths: string[]): string {
  return paths.join("/").replace(/\/{2,}/g, "/"); // Handle multiple slashes
}

// Export the function for use in other modules
export default join;
