/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { SummaryComponent } from './summary.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePipe } from '../../pipes/change.pipe';
import { CardTypeDirective } from '../../directives/card-type.directive';
import { PercentPipe, CurrencyPipe } from '@angular/common';

describe('SummaryComponent', () => {
    let component: SummaryComponent;
    let fixture: ComponentFixture<SummaryComponent>;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule
            ],
            declarations: [
                SummaryComponent,
                ChangePipe,
                CardTypeDirective
            ],
            providers: [
                CurrencyPipe,
                PercentPipe
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SummaryComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement.nativeElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render for a positive change', () => {
        component.stock = {
            symbol: 'abc', lastTradePriceOnly: 10, change: .25,
            changeInPercent: 0.025
        };
        fixture.detectChanges();
        const content = el.querySelector('.mdl-card h4').innerHTML;
        expect(content).toContain('ABC');
        expect(content).toContain('$10.00');
        expect(content).toContain('$0.25 (2.50%)');
    });

    it('should render for a negative change', () => {
        component.stock = {
            symbol: 'abc', lastTradePriceOnly: 8.34, change:
                -1.43, changeInPercent: -0.0243
        };
        fixture.detectChanges();
        const content = el.querySelector('.mdl-card h4').innerHTML;
        expect(content).toContain('ABC');
        expect(content).toContain('$8.34');
        expect(content).toContain('-$1.43 (-2.43%)');
    });
});
