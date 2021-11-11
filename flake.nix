{
  description = "Example project from Maximillian Scharzmuller's course";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ...}:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in {
    devShell.${system} = pkgs.mkShell {
      buildInputs = [
        pkgs.nodejs-17_x
        pkgs.nodePackages.npm
      ];
    };
  };
}
