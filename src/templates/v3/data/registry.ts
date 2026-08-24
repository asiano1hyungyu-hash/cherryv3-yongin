import { RegionData } from '@/src/types/index';
import { yonginData } from './yonginData';
import { goyangData } from './goyangData';
import { gangseoData } from './gangseoData';
import { guroData } from './guroData';

export const regionRegistry: Record<string, RegionData> = {
  yongin: yonginData,
  goyang: goyangData,
  gangseo: gangseoData,
  guro: guroData,
};

export function getRegionData(code: string = 'yongin'): RegionData {
  return regionRegistry[code] || yonginData;
}



