import {
  useAdvancedFiltersAnimation,
  useBatchScanningAnimation,
  useExportShareAnimation,
  useSignStampAnimation,
} from './index';
import {
  DOCUMENT_SCANNER,
  SIGN_STAMP,
  BATCH_SCANNING,
  ADVANCED_FILTERS,
  EXPORT_SHARE,
} from '../static/index';

const useAnimations = () => {
  return {
    [DOCUMENT_SCANNER]: undefined,
    [SIGN_STAMP]: useSignStampAnimation(),
    [BATCH_SCANNING]: useBatchScanningAnimation(),
    [ADVANCED_FILTERS]: useAdvancedFiltersAnimation(),
    [EXPORT_SHARE]: useExportShareAnimation(),
  };
};

export default useAnimations;
