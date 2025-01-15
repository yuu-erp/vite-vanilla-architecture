import { Device } from 'src/types/data'
export const HEIGHT_PAGINATION = 40

// Use the enum in CHECKPOINT_DEVICE
export const CHECKPOINT_DEVICE: Record<number, Device> = {
  768: Device.TABLET,
  1024: Device.DESKTOP
}
export const CHECKPOINT_COLUMN: Record<number, number> = {
  768: 4,
  1024: 6
}
export const CHECKPOINT_HEIGHT_STATUS_BAR: Record<number, number> = {
  768: 40,
  1024: 60
}
export const CHECKPOINT_COLUMN_DOCK: Record<number, number> = {
  768: 6,
  1024: 8
}
export const CHECKPOINT_SCREEN: Record<number, number> = {
  768: 768,
  1024: 1024
}

export const SIZE_LAYOUT_MOBILE = ['4x3', '4x4', '4x5', '4x6', '4x7', '4x8', '4x9']
export const SIZE_LAYOUT_TABLET = ['4x4f6', '4x5f6', '4x6f6', '4x7f6', '4x8f6', '4x9f6']
export const SIZE_LAYOUT_DESKTOP = ['6x3f8', '6x4f8', '6x5f8', '6x6f8', '6x7f8', '6x8f8', '6x9f8']
