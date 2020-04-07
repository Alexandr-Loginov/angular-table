import { Component, Directive, Injectable, NgModule, Type } from '@angular/core';

type AppAny = any;

export type ComponentType = AppAny & Component & Type<AppAny>;
export type ContainerType = AppAny & Component & Type<AppAny>;
export type DirectiveType = AppAny & Directive & Type<AppAny>;
export type ServiceType = AppAny & Injectable & Type<AppAny>;
export type ModuleType = AppAny & NgModule & Type<AppAny>;

export interface IControlComponent {
    component: ComponentType;
    data?: AppAny;
}
