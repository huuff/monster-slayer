{
  description = "Example project from Maximillian Scharzmuller's course";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ...}:
  let
    system = "x86_84-linux";
    pkgs = import nixpkgs { inherit system; };
  in with pkgs; {
    devShell.${system} = mkShell {
      buildInputs = [
        nodejs
        nodePackages.npm
      ];
    };
  };
}
