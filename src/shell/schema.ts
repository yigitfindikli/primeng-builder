export interface Schema {
  skipPackageJson: boolean;

  theme: 'omega' | 'flick' | 'lightness' | 'kasper' | 'start';

  project?: string;
}