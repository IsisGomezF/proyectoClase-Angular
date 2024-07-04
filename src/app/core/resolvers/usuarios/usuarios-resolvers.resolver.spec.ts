import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { usuariosResolversResolver } from './usuarios-resolvers.resolver';

describe('usuariosResolversResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => usuariosResolversResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
