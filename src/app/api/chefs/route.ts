import { NextResponse } from 'next/server';
import chefs from '../../../data/chef.json';

export async function GET() {
  return NextResponse.json(data);
}
