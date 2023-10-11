

import { CatalogPage } from "./OldCatalog.styled";

import AdvertList from "../../components/AdvertList/AdvertList";
import Button from "../../components/Button/Button";

export default function OldCatalog() {
  return (
    <div>
      <CatalogPage>
        <AdvertList />
      </CatalogPage>
      <Button />
    </div>
  );
}
