import { describe, expect, it } from 'vitest';
import { validatePayload } from '../api/webhook-handler';
describe('support validation', () => { it('accepts a valid request', () => { expect(validatePayload({fname:'Ada',email:'ada@example.com',subject:'General Question',order:'ARC-20260001',message:'Please help me access my purchase.'}).errors).toEqual({}); }); it('rejects malformed fields', () => { expect(Object.keys(validatePayload({fname:'',email:'bad',subject:'x',order:'123',message:'short',website:'bot'}).errors)).toEqual(['fname','email','subject','order','message','website']); }); });
